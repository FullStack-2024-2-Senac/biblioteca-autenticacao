
    package com.example.jwt.service;

    import io.jsonwebtoken.Jwts;
    import io.jsonwebtoken.SignatureAlgorithm;
    import org.springframework.stereotype.Service;

    @Service
    public class JwtService {
        private String secretKey = "minhaChaveSecreta";
        
        public String generateToken(String username) {
            return Jwts.builder()
                .setSubject(username)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
        }
        
        public boolean validateToken(String token) {
            // Lógica de validação do token
            return true;
        }
    }
    