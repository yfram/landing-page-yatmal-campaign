import getPayments from "./getPayments";

export default async function getTotalAmountDonated() {
    const payments = await getPayments();
    let total = 0;
    payments.forEach(payment => {
        total += parseFloat(payment.amount_donated);
    });
    return total;
}