package io.egen.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImplementation implements EmailService{

//    @Autowired
    private JavaMailSenderImpl javaMailSender;

    public void sendEmailAlert() throws MailException {

            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("nishant.coolie@gmail.com");
            message.setSubject("HIGH PRIORITY ALERT!");
            message.setText("Your vehicle just caused a high priority alert!");

            this.javaMailSender.send(message);
    }
}
