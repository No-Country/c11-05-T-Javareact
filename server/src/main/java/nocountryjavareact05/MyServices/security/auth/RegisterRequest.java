/*
 * Decompiled with CFR 0.150.
 * 
 * Could not load the following classes:
 *  nocountryjavareact05.MyServices.security.auth.RegisterRequest
 *  nocountryjavareact05.MyServices.security.auth.RegisterRequest$RegisterRequestBuilder
 */
package nocountryjavareact05.MyServices.security.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String name;
    private String lastname;
    private String email;
    private String password;
    private String pais;
    private String provincia;
    private String localidad;

}

