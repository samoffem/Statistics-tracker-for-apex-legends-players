<template>
  <div class="container">
    <Header />
    <router-view/>
  </div> 
</template>

<script>
import Header from './components/Header'
export default {
  components:{
    Header
  }
}
</script>

<style>
  :root{
    --primary-color: #953036;
    --primary-color-2: #1e1e28;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    background: var(--primary-color-2);
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    line-height: 1.6;
    
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  .body-bg-no-image{
    background: var(--primary-color-2);
  }
  .body-bg-image{
    background: var(--primary-color-2) url("./assets/apex-2.png") no-repeat top center;
  }
  .container{
    max-width: 968px;
    margin: 1rem auto;
    overflow: auto;
    padding: 0 2rem;
  }
  .form-group{
    margin: 1rem;
  }
  .search{
    background: rgba(0, 0, 0, 0.5);
    border: 4px solid #fff;
    margin-top: 1rem;
    padding: 2rem;
  }
  input,
  select,
  textarea{
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
  }
  .btn{
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 0.4rem 1.3rem;
    border: none;
    cursor: pointer;
    outline: none;
    margin-top: 1rem;
  }

  @media (max-width: 700px){
    body{
      background: var(--primary-color);
    }
  }
   @media (max-width: 576px){
    input::placeholder{
      font-size: 0.9rem;
    }
    .container{
      padding: 0 1rem;
    }
    .search{
      padding: 1rem;
    }
    .form-group{
      margin: 0;
    }
  }

</style>
