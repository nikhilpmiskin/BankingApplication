package springbootstarter.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import springbootstarter.bankingObjects.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
