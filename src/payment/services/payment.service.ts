/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { EmailService } from './../../email/email.service';
import { UsersService } from './../../users/services/users.service';
import { STRIPE_SECRET_KEY } from './../../core/config/constants';
import { Payment } from './../../shared/models/payment.model';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { CreatePaymentDto } from '../dto/payment.dto';
import { Appointment } from '@app/src/shared/models/appointment.model';
import { Subscription } from '@app/src/shared/models/subscription.model';
import { User } from '@app/src/users/models/user.model';


@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment)
    private readonly paymentModel: typeof Payment,
    private usersService: UsersService,
    private emailService: EmailService,
    private readonly sequelize: Sequelize,
  ) { }


  async getPaymentsById(userId: number): Promise<any> {
    return await this.paymentModel.findAndCountAll({
      where: { userId: userId },
      include: [
        {
          model: Appointment,
          required: false
        },
        {
          model: Subscription,
          required: false
        }
      ]
    });
  }


  async getProviderPaymentsById(providerId: number): Promise<any> {
    return await this.paymentModel.findAndCountAll({
      where: { paymentType: 'A' },
      include: [
        {
          model: Appointment,
          where: { providerId: providerId },
          required: true
        },
        {
          model: User
        }
      ]
    });
  }

  /**
   * doStripePayment
   */
  public async doStripePayment(data: { amount: number, token: string }) {
    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27',
    });

    const stripeResult = await stripe.charges.create({
      amount: data.amount,
      currency: 'USD',
      source: data.token
    });

    return stripeResult;
  }

  async savePayment(paymentData: CreatePaymentDto): Promise<any> {

    const txnData = { id: '', status: 'PENDING' };
    if (paymentData.type == 'S') {
      const sp = await this.doStripePayment({ amount: paymentData.amount, token: paymentData.stripe.token });
      txnData.id = sp.id;
      txnData.status = sp.status == 'succeeded' ? 'APPROVED' : 'PENDING'
    }

    const payment = await this.paymentModel.create({
      userId: paymentData.userId,
      type: paymentData.type,
      paymentType: paymentData.paymentType,
      amount: paymentData.amount,
      txnId: txnData.id,
      status: txnData.status,
    });

    // const userDetails = await this.usersService.getLoggedinUserData();

    // const mailData = {
    //   name: userDetails.firstName,
    //   email: userDetails.email,
    //   amount: paymentData.amount,
    // };

    // await this.emailService.sendPaymentMail(mailData);

    return payment;

  }


  async chargeStripe(token: string): Promise<any> {
    const stripe = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: '2020-08-27',
    });

    const charge = await stripe.charges.create({
      amount: 999,
      currency: 'usd',
      description: 'Example charge',
      source: token,
    });

    return charge;
  }


}


