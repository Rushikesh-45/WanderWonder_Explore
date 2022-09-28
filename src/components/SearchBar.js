import React from 'react'

function SearchBar() {
  return (
    <div>
      
<br/><br/>


      ;<section className="ftco-section justify-content-end ftco-search">
  <div className="container-wrap ml-auto">
    <div className="row no-gutters">
      <div className="col-md-12 nav-link-wrap">
        <div
          className="nav nav-pills justify-content-center text-center"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="v-pills-1-tab"
            data-toggle="pill"
            href="#v-pills-1"
            role="tab"
            aria-controls="v-pills-1"
            aria-selected="true"
          >
            Tour
          </a>
          <a
            className="nav-link"
            id="v-pills-2-tab"
            data-toggle="pill"
            href="#v-pills-2"
            role="tab"
            aria-controls="v-pills-2"
            aria-selected="false"
          >
            Hotel
          </a>
          <a
            className="nav-link"
            id="v-pills-3-tab"
            data-toggle="pill"
            href="#v-pills-3"
            role="tab"
            aria-controls="v-pills-3"
            aria-selected="false"
          >
            Car Rent
          </a>
        </div>
      </div>
      <div className="col-md-12 tab-wrap">
        <div className="tab-content p-4 px-5" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-1"
            role="tabpanel"
            aria-labelledby="v-pills-nextgen-tab"
          >
            <form action="#" className="search-destination">
              <div className="row">
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">From</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-my_location" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="From"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Where</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Where"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Check In</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control checkin_date"
                        placeholder="Check In"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Check Out</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control checkout_date"
                        placeholder="From"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Travelers</label>
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down" />
                        </div>
                        <select name id className="form-control">
                          <option value>1</option>
                          <option value>2</option>
                          <option value>3</option>
                          <option value>4</option>
                          <option value>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md align-self-end">
                  <div className="form-group">
                    <div className="form-field">
                      <input
                        type="submit"
                        defaultValue="Search"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-2"
            role="tabpanel"
            aria-labelledby="v-pills-performance-tab"
          >
            <form action="#" className="search-destination">
              <div className="row">
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Check In</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control checkin_date"
                        placeholder="Check In"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Check Out</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control checkout_date"
                        placeholder="From"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Guest</label>
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="ion-ios-arrow-down" />
                        </div>
                        <select name id className="form-control">
                          <option value>1</option>
                          <option value>2</option>
                          <option value>3</option>
                          <option value>4</option>
                          <option value>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md align-self-end">
                  <div className="form-group">
                    <div className="form-field">
                      <input
                        type="submit"
                        defaultValue="Search"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-3"
            role="tabpanel"
            aria-labelledby="v-pills-effect-tab"
          >
            <form action="#" className="search-destination">
              <div className="row">
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Where</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Where"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Check In</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control checkin_date"
                        placeholder="Check In"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-items-end">
                  <div className="form-group">
                    <label htmlFor="#">Check Out</label>
                    <div className="form-field">
                      <div className="icon">
                        <span className="icon-map-marker" />
                      </div>
                      <input
                        type="text"
                        className="form-control checkout_date"
                        placeholder="From"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md align-self-end">
                  <div className="form-group">
                    <div className="form-field">
                      <input
                        type="submit"
                        defaultValue="Search"
                        className="form-control btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>







    </div>
  )
}

export default SearchBar
