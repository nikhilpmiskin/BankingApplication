package springbootstarter.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import springbootstarter.bankingObjects.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
