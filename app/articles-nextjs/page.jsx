import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl ml-6">
        NextJS for both frontend and backend, Database (PostgresSQL) set up
        guides, REST API
      </h1>
      <br />
      <h5 className="ml-6 text-slate-400">Posted on July, 2024</h5>
      <br />
      <h2 className="ml-6 text-xl font-bold">
        Front-end & Back-end (Start a new project):
      </h2>
      <br />
      <div className="ml-6 max-w-screen-md">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npx create-next-app@latest "name of project"</code>
          </pre>
        </div>
      </div>
      <h2 className="ml-6">Run the development server:</h2>
      <div className="ml-6 max-w-screen-md">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>cd "name of project"</code>
          </pre>
        </div>
      </div>
      <br />
      <div className="ml-6 max-w-screen-md">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>npm run dev</code>
          </pre>
        </div>
      </div>
      <br />
      <h5 className="ml-6">When you open broswer(http://localhost:3000/), you should see this: </h5>
      <div className="mockup-browser bg-base-300 border m-6">
        <div className="mockup-browser-toolbar">
          <div className="input">http://localhost:3000/</div>
        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">
          <img
            src="https://ik.imagekit.io/bprw8mk45/NextJS%20start%20up/Screenshot%202024-07-04%20at%2012.48.31%E2%80%AFPM_x4OySq1zv.png?updatedAt=1720068541744"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
      </div>
      <h5 className="ml-6">Folder structure: </h5>
      <div className="mockup-browser bg-base-300 border m-6">
        <div className="mockup-browser-toolbar">
          <div className="input">http://localhost:3000/</div>
        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">
          <img
            src="https://ik.imagekit.io/bprw8mk45/NextJS%20start%20up/Screenshot%202024-07-04%20at%2012.46.17%E2%80%AFPM_P5G6aTEZ_.png?updatedAt=1720068406267"
            class="h-auto max-w-full"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default page;
