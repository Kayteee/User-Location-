import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;


<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 60%;
  margin:20px
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px;
}


