package springbootstarter.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import springbootstarter.bankingObjects.Loan;
import springbootstarter.bankingObjects.User;

public interface LoanRepository extends JpaRepository<Loan, Long> {
}
