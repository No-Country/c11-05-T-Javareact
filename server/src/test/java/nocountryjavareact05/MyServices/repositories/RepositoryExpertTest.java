package nocountryjavareact05.MyServices.repositories;

import nocountryjavareact05.MyServices.entidades.Expert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class RepositoryExpertTest {
@Autowired
RepositoryExpert repositoryExpert;
    @Test
    void findByUser() {
        Expert expert = repositoryExpert.findByUser(2L);
        System.out.println("expert.getId() = " + expert.getId());
        System.out.println("expert.getName() = " + expert.getName());
    }
}