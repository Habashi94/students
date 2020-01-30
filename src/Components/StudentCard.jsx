import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "../CSS/card.module.css";

export default function StudentCard({ student }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Student information
          </Card.Subtitle>
          <Card.Text>Cohort: {student.startingCohort}</Card.Text>
          <Card.Text>Current Block: {student.currentBlock}</Card.Text>
          <div className={styles.button}>
            <Button variant="primary">View</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
