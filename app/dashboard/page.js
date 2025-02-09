import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-5 fw-semibold">Collapsible</span>
      </a>
      <ul className="list-unstyled ps-0">
        {menuItems.map(({ id, title, links }) => (
          <li className="mb-1" key={id}>
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target={`#${id}`}
              aria-expanded="false"
            >
              {title}
            </button>
            <div className="collapse" id={id}>
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="link-dark rounded">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button
            className="btn btn-toggle align-items-center rounded"
            data-bs-toggle="collapse"
            data-bs-target="#account-collapse"
            aria-expanded="true"
          >
            Account
          </button>
          <div className="collapse show" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-dark rounded">New...</a></li>
              <li><a href="#" className="link-dark rounded">Profile</a></li>
              <li><a href="#" className="link-dark rounded">Settings</a></li>
              <li><a href="#" className="link-dark rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

const menuItems = [
  {
    id: "home-collapse",
    title: "Home",
    links: ["Overview", "Updates", "Reports"],
  },
  {
    id: "dashboard-collapse",
    title: "Dashboard",
    links: ["Overview", "Weekly", "Monthly", "Annually"],
  },
  {
    id: "orders-collapse",
    title: "Orders",
    links: ["New", "Processed", "Shipped", "Returned"],
  },
];

export default Sidebar;