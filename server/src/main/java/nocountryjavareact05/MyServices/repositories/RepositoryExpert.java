package nocountryjavareact05.MyServices.repositories;

import nocountryjavareact05.MyServices.entidades.Expert;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RepositoryExpert extends JpaRepository<Expert,Long> {
    @Query(value = "Select * from expert where user_id = :user",nativeQuery = true)
    Expert findByUser(Long user);
}
