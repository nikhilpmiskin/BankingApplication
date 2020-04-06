package springbootstarter.bankingObjects;

public class Amount {
    double amount;

    public Amount(double amount) {
        this.amount = amount;
    }

    public Amount() {
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Amount{" +
                "amount=" + amount +
                '}';
    }
}
