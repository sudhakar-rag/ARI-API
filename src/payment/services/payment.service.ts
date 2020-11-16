import { STRIPE_SECRET_KEY } from './../../core/config/constants';
import { Payment } from './../../shared/models/payment.model';
import { Sequelize } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';


@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment)
    private readonly paymentModel: typeof Payment,
    private readonly sequelize: Sequelize,
  ) { }


  async getPaymentsById(userId: number): Promise<any> {
    return await this.paymentModel.findAll({
      where: { userId: userId }
    });
  }


  async savePayment(paymentData: any): Promise<any> {

    const stripe = new Stripe(STRIPE_SECRET_KEY, {
        apiVersion: '2020-08-27',
      });

    const stripeResult =   stripe.charges.create({
        amount: paymentData.amount,
        currency: paymentData.currency,
        source: paymentData.source
        });

    if(stripeResult) {

        await this.paymentModel.create({
            userId: paymentData.userId,
            type: paymentData.type,
            amount: paymentData.amount,
            txnId: (await stripeResult).id,
            status: (await stripeResult).status,
        });

        return stripeResult;

    } else 
    {
        return paymentData;   
    }

   }

   }


