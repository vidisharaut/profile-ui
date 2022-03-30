import React from "react";
import Sidebar from "./Sidebar";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

const ViewPage = () => {
  return (
    <div className="viewpage">
      <Sidebar />

      <div className="container">
        <div className="con-1">
          <h3>Most Leads</h3>
          <div className="col">
            <p className="label">
              <AiOutlineMail color="aqua" /> Name
            </p>
            <p className="val">abc</p>
          </div>
          <div className="col">
            <p className="label">
              <MdOutlinePeopleOutline color="blue" /> Pan
            </p>
            <p className="val">123</p>
          </div>
          <div className="col">
            <p className="label">
              <BsTelephone color="orange" /> Address
            </p>
            <p className="val">noida</p>
          </div>
          <div className="col">
            <p className="label">
              <IoIosAddCircleOutline color="lightblue" /> Phone
            </p>
            <p className="val">123</p>
          </div>
          <div className="col">
            <p className="label">
              <IoIosAddCircleOutline color="lightblue" /> Email
            </p>
            <p className="val">abc@test.com</p>
          </div>
        </div>

        <div className="con-2">
          <h3>Type of income</h3>
          <div className="default-checkboxes">
            <input
              type="checkbox"
              name="default"
              className="default-checkbox"
            />
            <label htmlFor="default">Default checkbox</label>
          </div>
          <div className="default-checkboxes">
            <input
              type="checkbox"
              name="default"
              defaultChecked={true}
              className="default-checkbox"
            />
            <label htmlFor="default">Checked checkbox</label>
          </div>
          <div className="default-checkboxes">
            <input
              type="checkbox"
              name="default"
              className="default-checkbox"
            />
            <label htmlFor="default">Default checkbox</label>
          </div>
          <div className="default-checkboxes">
            <input
              type="checkbox"
              name="default"
              defaultChecked={true}
              className="default-checkbox"
            />
            <label htmlFor="default">Checked checkbox</label>
          </div>
          <div className="default-checkboxes">
            <input
              type="checkbox"
              name="default"
              className="default-checkbox"
            />
            <label htmlFor="default">Default checkbox</label>
          </div>
          <div className="default-checkboxes">
            <input
              type="checkbox"
              name="default"
              defaultChecked={true}
              className="default-checkbox"
            />
            <label htmlFor="default">Checked checkbox</label>
          </div>
        </div>
        <div className="con-3">
          <h3>Danger Zone</h3>
          <h4>Request for</h4>
          <p style={{ margin: " 5px 20px" }}>
            Transfer this account to another user or to an organization where
            you have the ability to create repositories.
          </p>
          <div className="buttons">
            <div className="button">abc</div>
            <div className="button">abc1</div>
            <div className="button">Meeting</div>
            <div className="button">Doc Review</div>
          </div>
        </div>
        <div className="con-4">
          <h3>Previous Meetings</h3>
          <div className="meetings">
            <p>1</p>
            <p>22 Feb 2022</p>
          </div>
          <div className="meetings">
            <p>2</p>
            <p>26 Feb 2022</p>
          </div>
          <div className="meetings">
            <p>3</p>
            <p>1 Mar 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
