package com.example.restfulwebservice.todo;

import lombok.*;

import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class Todo {

    private long id;
    private String username;
    private String description;
    private Date targetDate;
    private boolean isDone;

    protected Todo(){

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
