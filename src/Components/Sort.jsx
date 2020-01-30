import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import styles from "../CSS/sort.module.css";

export default function Sort({
  ascendingOrder,
  descendingOrder,
  filterByBlock
}) {
  return (
    <div className={styles.sort}>
      <DropdownButton
        id="dropdown-basic-button"
        title="Order by Cohort"
        drop="right"
      >
        <Dropdown.Item
          onClick={() => {
            ascendingOrder();
          }}
        >
          Ascending
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            descendingOrder();
          }}
        >
          Descending
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        id="dropdown-basic-button"
        title="Filter by Block"
        drop="right"
      >
        <Dropdown.Item
          onClick={() => {
            filterByBlock();
          }}
        >
          All
        </Dropdown.Item>
        <Dropdown.Item
          id="fun"
          onClick={event => {
            filterByBlock(event.target.id);
          }}
        >
          Fundementals
        </Dropdown.Item>
        <Dropdown.Item
          id="be"
          onClick={event => {
            filterByBlock(event.target.id);
          }}
        >
          Backend
        </Dropdown.Item>
        <Dropdown.Item
          id="fe"
          onClick={event => {
            filterByBlock(event.target.id);
          }}
        >
          Frontend
        </Dropdown.Item>
        <Dropdown.Item
          id="proj"
          onClick={event => {
            filterByBlock(event.target.id);
          }}
        >
          Project
        </Dropdown.Item>
        <Dropdown.Item
          id="grad"
          onClick={event => {
            filterByBlock(event.target.id);
          }}
        >
          Graduates
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
}
