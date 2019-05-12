<template>
  <div class="home">
    <div class="container">
      <h2>
        Enodo Coding Challenge
      </h2>
      <h6>
        May 2019
      </h6>
      <br>
      <h6>
        <strong>Task:</strong> Use the attached Excel file ot create a filterable Google Map and deploy on Github
      </h6>
      <div class="row mt-3 mb-3">
        <div class="col-md-9 text-left">
          <p>
            Requirements:
          </p>
          <ul>
            <li>
              All 1,500 properties must display on the map. Display the full address of the property in a hover window.
            </li>
            <li>
              The user must be ablet o filter by the values in any column. Categorical values should be in a dropdown, and for numeric values the user should be able to enter a min and max value to filter.
            </li>
            <li>
              Apply a color gradient to each point using the "estimated_market_value" column, lowest should be red, highest should be green.
            </li>
            <li>
              Style should be similar to Vue.js element framework: https://element.eleme.io/#/en-US
            </li>
          </ul>
        </div>
        <div class="col-md-3 text-left">
          <p>
            Timeline: 1 week
          </p>
          <p>
            Vue.js framework
          </p>
          <p>
            View the <a href="https://jeffreymzhou.github.io/enodo-coding-challenge/#/fullmap">Final Product</a>
          </p>
          <p>
            Visit the <a href="https://github.com/jeffreymzhou/enodo-coding-challenge">Github Repo</a>
          </p>
        </div>
      </div>
      <h3>
        My Process:
      </h3>
      <div class="row mt-5">
        <div class="col-md-9 text-left">
          <h4>
            Stage 1: Parse 
          </h4>
          <ul>
            <li>
              Parse the excel sheet into a javascript object
            </li>
            <li>
              Used SheetJS: https://github.com/SheetJS/js-xlsx
            </li>
            <li>
              Display the data in the web app with a simple bootstrap table
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <img width="100%" src="../assets/parse.png">
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-9 text-left">
          <h4>
            Stage 2: Maps Test
          </h4>
          <ul>
            <li>
              Obtain a google maps API key
            </li>
            <li>
              Load a simple map onto web app
            </li>
            <li>
              Create markers (using long/lat specifications)
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <img width="100%" src="../assets/map_test.png">
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-9 text-left">
          <h4>
            Stage 3: Filter Test
          </h4>
          <ul>
            <li>
              Create a bare-bones filter function that can filter min/max and type on test data
            </li>
            <li>
              Design filter structure to enable looping through filters for actual data
            </li>
            <li>
              Dynamically change the items displayed in table based on filter results
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <img width="100%" src="../assets/filter_test.png">
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-9 text-left">
          <h4>
            Stage 4: Color Gradient
          </h4>
          <ul>
            <li>
              Write a color generating function (return hex color) for a numerical value input
            </li>
            <li>
              Allow adjustable min/max numerical range to enable scaling the range of the gradient
            </li>
            <li>
              Test function by applying it to dummy data (on populated map)
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <img width="100%" src="../assets/color_gradient.png">
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-9 text-left">
          <h4>
            Stage 7: Populate Map
          </h4>
          <ul>
            <li>
              Populate the map by looping through the test data
            </li>
            <li>
              Manipulate the marker icon to display custom marker shape and color
            </li>
            <li>
              Implement info-window on hover functionality for each marker
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <img width="100%" src="../assets/populate_map.png">
        </div>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col-md-9 text-left">
          <h4>
            Stage 8: Full Map
          </h4>
          <ul>
            <li>
              Combine filter and populated map to a fully functioning filterable google maps display
            </li>
            <li>
              Format the sidebar filter with all filter options
            </li>
            <li>
              Link the full property data to the filter
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <img width="100%" src="../assets/full_map.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
