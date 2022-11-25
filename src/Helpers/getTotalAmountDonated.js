import getPayments from "./getPayments";

export default async function getTotalAmountDonated() {
    const payments = await getPayments();
    let total = 0;
    payments.forEach(payment => {
        total += payment.amount_donated;
    });
    return total;
}