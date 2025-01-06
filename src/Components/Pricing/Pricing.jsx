import React from 'react'
import styles from './Pricing.module.css';
import { CiCircleCheck } from "react-icons/ci";
import { MdArrowOutward } from 'react-icons/md';

const Pricing = ({ pricingPlan, pricing, savingPrice, benefits, popularPlan, monthly  }) => {
  return (
    <div className={styles.PlanContainer}>
        <p className={styles.PricingPlan}>{pricingPlan}</p>
        <div className={styles.PricingSubContainer}>
            <p className={styles.Pricing}>$ {pricing}</p>
            <p className={styles.SavingPrice}>{monthly ? "Per Month" : `You'll Save $${savingPrice}`}</p>
        </div>
        <hr className={styles.HRLine}/>
        <div className={styles.BenefitsContainer}>
            {
                benefits.map((benefit, index) => (
                    <div className={styles.BenefitPointer}>
                        <CiCircleCheck className={styles.BenefitIcon}/>
                        <span>{benefit}</span>
                    </div>
                ))
            }
        </div>
        <button id={styles.PricingPlanBtn}>
            Buy Now
            <MdArrowOutward  id={styles.PricingPlanIcon}/>
        </button>
    </div>
  )
}

export default Pricing