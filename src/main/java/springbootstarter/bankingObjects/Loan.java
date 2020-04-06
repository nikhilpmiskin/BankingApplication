package springbootstarter.bankingObjects;

import javax.persistence.*;

@Entity
@Table(name = "Loans")
public class Loan {
    private long id;
    private long userId;
    private double sanctionAmount;

    public Loan() {
    }

    public Loan(long id, long userId, double sanctionAmount) {
        this.id = id;
        this.userId = userId;
        this.sanctionAmount = sanctionAmount;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "user_id", nullable = false)
    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    @Column(name = "sanction_amount", nullable = false)
    public double getSanctionAmount() {
        return sanctionAmount;
    }

    public void setSanctionAmount(double sanctionAmount) {
        this.sanctionAmount = sanctionAmount;
    }
}
