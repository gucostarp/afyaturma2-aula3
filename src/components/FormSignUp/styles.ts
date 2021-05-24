import styled from 'styled-components';

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100%; */

  form {
    display: grid;
    width: 50%;
    border: solid 1px #F71755;
    padding: 50px;
    border-radius: 50px 10px 50px 10px;
    margin-top: 50px;
    
  } & input[type=submit]{
      background: #F71755;
      margin-top: 10px;
      color: #fff;
      border: 0px;
      border-radius: 5px;
      height: 30px;
      
  } & input[type=text]{
      border: solid 1px #F71755;
      border-radius: 5px;
      margin: 5px 0px 5px 0px;
      height: 20px;
      padding: 5px;
  
  } & input[type=password]{
      border: solid 1px #F71755;
      border-radius: 5px;
      margin: 5px 0px 5px 0px;
      height: 20px;
      padding: 5px;
  }
`