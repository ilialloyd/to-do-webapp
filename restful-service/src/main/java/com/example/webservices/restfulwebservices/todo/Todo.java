package com.example.webservices.restfulwebservices.todo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;
import java.util.Objects;

//insert into todo(id,username,description,target_date,is_done)
//        values ( 10001,'lightacademy','learn jpa',sysdate(),false );


@Getter
@Setter
@AllArgsConstructor
@ToString
@Entity
public class Todo {
    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

    protected Todo() {

    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
