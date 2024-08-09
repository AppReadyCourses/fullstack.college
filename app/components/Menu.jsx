import React, { useDebugValue } from "react";
import Link from "next/link";

const Menu = (props) => {
  return (
    <div>
      <ul className="menu   ">
        <li>
          <>
            <Link href="/">
              <svg
                className="h-5 w-5"
                viewBox="0 0 48 48"
                version="1"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 48 48"
              >
                <polygon fill="#E8EAF6" points="42,39 6,39 6,23 24,6 42,23" />
                <g fill="#C5CAE9">
                  <polygon points="39,21 34,16 34,9 39,9" />
                  <rect x="6" y="39" width="36" height="5" />
                </g>
                <polygon
                  fill="#B71C1C"
                  points="24,4.3 4,22.9 6,25.1 24,8.4 42,25.1 44,22.9"
                />
                <rect x="18" y="28" fill="#D84315" width="12" height="16" />
                <rect x="21" y="17" fill="#01579B" width="6" height="6" />
                <path
                  fill="#FF8A65"
                  d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                />
              </svg>
              Home
            </Link>
          </>
          <>
            <Link href="/tags">
              <svg
                className="h-5 w-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="48" height="48" fill="white" fillOpacity="0.01" />
                <path
                  d="M8 44L8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V44L24 35.7273L8 44Z"
                  fill="#2F88FF"
                  stroke="#000000"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 18H32"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tags
            </Link>
          </>
        </li>
        <li>
          <>
            <Link href="/courses">
              <svg
                id="Uploaded to svgrepo.com"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="h-5 w-5"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                {...props}
              >
                <style type="text/css">
                  {
                    "\n\t.avocado_een{fill:#231F20;}\n\t.avocado_zes{fill:#FFFAEE;}\n\t.avocado_negen{fill:#6F9B45;}\n\t.avocado_vijf{fill:#DBD2C1;}\n\t.st0{fill:#EAD13F;}\n\t.st1{fill:#CC4121;}\n\t.st2{fill:#E0A838;}\n\t.st3{fill:#D1712A;}\n\t.st4{fill:#A3AEB5;}\n\t.st5{fill:#788287;}\n\t.st6{fill:#C3CC6A;}\n\t.st7{fill:#248EBC;}\n\t.st8{fill:#8D3E93;}\n\t.st9{fill:#3D3935;}\n\t.st10{fill:#D36781;}\n\t.st11{fill:#E598A3;}\n\t.st12{fill:#716558;}\n\t.st13{fill:#AF9480;}\n\t.st14{fill:#231F20;}\n"
                  }
                </style>
                <g>
                  <polygon
                    className="avocado_negen"
                    points="13.5,28.5 13.5,27.5 0.5,27.5 0.5,5.5 31.5,5.5 31.5,27.5 18.5,27.5 18.5,28.5  "
                  />
                  <polygon
                    className="avocado_zes"
                    points="14.118,25.5 2.5,25.5 2.5,4.5 16,4.5 16,26.441  "
                  />
                  <g>
                    <polygon
                      className="avocado_vijf"
                      points="16,4.5 29.5,4.5 29.5,25.5 17.882,25.5 16,26.441  "
                    />
                  </g>
                  <path
                    className="avocado_een"
                    d="M6,11h6v1H6V11z M6,14h6v-1H6V14z M6,16h6v-1H6V16z M6,18h6v-1H6V18z M20,18h6v-1h-6V18z M26,11 h-6v1h6V11z M26,13h-6v1h6V13z M26,15h-6v1h6V15z M32,5v23H19v1h-6v-1H0V5h2V4h28v1H32z M3,25h11.236L16,25.882L17.764,25H29V5H3 V25z M31,6h-1v20H18l-2,1l-2-1H2V6H1v21h13v1h4v-1h13V6z"
                  />
                </g>
              </svg>
              Courses
            </Link>
          </>
        </li>
        <li>
          <Link href="/topics">
            <svg
              className="h-5 w-5"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#C0392B"
                d="M6 100h88a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H6a6 6 0 0 0-6 6v88a6 6 0 0 0 6 6z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#E74C3C"
                d="M100 30h-.025a5.5 5.5 0 0 0-5.475-5H6.25C2.937 25 0 22.314 0 19V6a6 6 0 0 1 6-6h88c3.313 0 6 2.687 6 6.001V30z"
              />
              <path
                opacity=".15"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 100h2V0H5v100z"
              />
              <path
                opacity=".15"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffffff"
                d="M7 100h2V0H7v100z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#ffffff"
                d="M100 10.001a5 5 0 0 0-5-5H7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h87a6 6 0 0 1 6 6v-15h-.101c.066-.323.101-.658.101-1z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#95A5A6"
                d="M100 15.423v-3.921s.183-4-5-4H5v2h89a5.995 5.995 0 0 1 5.98 5.616c-.107-1-.789-3.615-4.98-3.615H5v2h89a5.995 5.995 0 0 1 5.98 5.616c-.107-1.001-.789-3.616-4.98-3.616H5v2h89a6 6 0 0 1 6 6v-8.08z"
                opacity=".2"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#2980B9"
                d="M80 100h10V25H80v75z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#3498DB"
                d="M80 25.007h10V0H80v25.007z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M82 100h2V0h-2v100zM86 0v100h2V0h-2z"
                opacity=".1"
              />
            </svg>
            Topics
          </Link>
        </li>
        <li>
          <a>
            <svg
              className="h-5 w-5"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" fill="white" fillOpacity="0.01" />
              <rect width="48" height="48" fill="white" fillOpacity="0.01" />
              <path
                d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z"
                fill="#2F88FF"
                stroke="#000000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30"
                stroke="#000000"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M22 37H26"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
