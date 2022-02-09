package com.example.ppmtool.security;

import com.example.ppmtool.domain.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.example.ppmtool.security.SecurityConstants.EXPIRATION_TIME;
import static com.example.ppmtool.security.SecurityConstants.SECRET;

@Component
public class JwtTokenProvider {

    public String generateToken(Authentication auth) {
        User user = (User) auth.getPrincipal();
        Date currentTime = new Date(System.currentTimeMillis());
        Date expiryTime = new Date(currentTime.getTime()+EXPIRATION_TIME);

        String userId = Long.toString(user.getId());

        Map<String,Object> claims = new HashMap<>();
        claims.put("id", (Long.toString(user.getId())));
        claims.put("username", user.getUsername());
        claims.put("fullName", user.getFullName());

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(currentTime)
                .setExpiration(expiryTime)
                .signWith(SignatureAlgorithm.HS512, SECRET)
                .compact();
    }
}
