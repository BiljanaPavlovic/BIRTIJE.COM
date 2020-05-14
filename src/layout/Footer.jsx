import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <hr />
        <h2 class="display-5 text-center">Contact</h2>
        <div class="row">
          <div class="col-md-12">
            <a
              href="https://www.facebook.com/Birtije-Beograd-103378631383952"
              target="/blanck"
              >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="www.instagram.com">
              <i class="fab fa-instagram"></i>
            </a>
              <h6>
                Ako želite da obiđemo Vašu kafanu javite nam se putem društvenih mreža
                ili na naš mejl: birtijebeograd@gmail.com
              </h6>

            <p>
              &copy; Made by Biljana Pavlovic 2020. E-mail:
              zabiljanupavlovic@gmail.com{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
