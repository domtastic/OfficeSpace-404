import React from "react";

import "./table.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newFile = () => {
  const statusChance = Math.random();
  return {
    fileName:"",
    lastDate: Math.floor(Math.random() * 30),
    
    company: Math.floor(Math.random() * 100),
    
    status:
      statusChance > 0.66
        ? "file"
        : statusChance > 0.33 ? "received" : "deleted"
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newFile(),
      children: range(10).map(newFile)
    };
  });
}

