import React from "react";
import { ServiceItem } from "./serviceItem";

import classes from "./services.module.css";

export const Services = (props) => {
  return (
    <section className={classes["services_container"]}>
      <div className={classes["services_center"]}>
        <div className={classes["title"]}>
          <h2>custom furniture built only for you</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className={classes["service_list"]}>
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </div>
        <div className={classes["contact_container"]}>
          <h2>Join our newsletter and get 20% off</h2>
          <div className={classes["info_contact"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
            <div className={classes["contact"]}>
              <form className={classes["contact_form"]}>
                <input className={classes["form_input"]} name="mail" />
                <button type="submit" className={classes["btn_contact"]}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
