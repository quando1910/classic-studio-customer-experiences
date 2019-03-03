<template>
  <section id="contract">
    <h1>contracts</h1>
    <div class="form-style-5">
      <form>
        <fieldset>
          <legend>
            <span class="number">1</span> Candidate Info
          </legend>
          <input type="text" name="field1" placeholder="Your Name *">
          <input type="email" name="field2" placeholder="Your Email *">
          <textarea name="field3" placeholder="About yourself"></textarea>
          <label for="job">Interests:</label>
          <select id="job" name="field4">
            <optgroup label="Indoors">
              <option value="fishkeeping">Fishkeeping</option>
              <option value="reading">Reading</option>
              <option value="boxing">Boxing</option>
              <option value="debate">Debate</option>
              <option value="gaming">Gaming</option>
              <option value="snooker">Snooker</option>
              <option value="other_indoor">Other</option>
            </optgroup>
            <optgroup label="Outdoors">
              <option value="football">Football</option>
              <option value="swimming">Swimming</option>
              <option value="fishing">Fishing</option>
              <option value="climbing">Climbing</option>
              <option value="cycling">Cycling</option>
              <option value="other_outdoor">Other</option>
            </optgroup>
          </select>
        </fieldset>
        <fieldset>
          <legend>
            <span class="number">2</span> Additional Info
          </legend>
          <textarea name="field3" placeholder="About Your School"></textarea>
        </fieldset>
        <input type="submit" value="Apply">
      </form>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#contract {
  height: 800px;
  background: linear-gradient(50deg, #f3c680, hsla(179, 54%, 76%, 1));
  .form-style-5 {
    max-width: 500px;
    padding: 10px 20px;
    background: #f4f7f8;
    margin: 10px auto;
    padding: 20px;
    background: #f4f7f8;
    border-radius: 8px;
    font-family: Georgia, "Times New Roman", Times, serif;
    fieldset {
      border: none;
    }
    legend {
      font-size: 1.4em;
      margin-bottom: 10px;
    }
    label {
      display: block;
      margin-bottom: 8px;
    }
    input {
      &[type="text"],
      &[type="date"],
      &[type="datetime"],
      &[type="email"],
      &[type="number"],
      &[type="search"],
      &[type="time"],
      &[type="url"] {
        font-family: Georgia, "Times New Roman", Times, serif;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 4px;
        font-size: 15px;
        margin: 0;
        outline: 0;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        background-color: #e8eeef;
        color: #8a97a0;
        -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
        margin-bottom: 30px;
      }
    }
    textarea,
    select {
      font-family: Georgia, "Times New Roman", Times, serif;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      border-radius: 4px;
      font-size: 15px;
      margin: 0;
      outline: 0;
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      background-color: #e8eeef;
      color: #8a97a0;
      -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
      margin-bottom: 30px;
    }
    input {
      &[type="text"]:focus,
      &[type="date"]:focus,
      &[type="datetime"]:focus,
      &[type="email"]:focus,
      &[type="number"]:focus,
      &[type="search"]:focus,
      &[type="time"]:focus,
      &[type="url"]:focus {
        background: #d2d9dd;
      }
    }
    textarea:focus {
      background: #d2d9dd;
    }
    select {
      &:focus {
        background: #d2d9dd;
      }
      -webkit-appearance: menulist-button;
      height: 35px;
    }
    .number {
      background: #1abc9c;
      color: #fff;
      height: 30px;
      width: 30px;
      display: inline-block;
      font-size: 0.8em;
      margin-right: 4px;
      line-height: 30px;
      text-align: center;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
      border-radius: 15px 15px 15px 0px;
    }
    input {
      &[type="submit"],
      &[type="button"] {
        position: relative;
        display: block;
        padding: 19px 39px 18px 39px;
        color: #fff;
        margin: 0 auto;
        background: #1abc9c;
        font-size: 18px;
        text-align: center;
        font-style: normal;
        width: 100%;
        border: 1px solid #16a085;
        border-width: 1px 1px 3px;
        margin-bottom: 10px;
      }
      &[type="submit"]:hover,
      &[type="button"]:hover {
        background: #109177;
      }
    }
  }
}
</style>
