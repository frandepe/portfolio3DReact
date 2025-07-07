import { Back } from "../../components/Back/Back";
import { Carousel3D } from "../../components/Carousel3D/Carousel3D";

const MilOpciones = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-10 text-white">
      <div className="w-[90vw]">
        <div className="flex gap-2 items-end flex-wrap">
          <Back />
          <h2 className="text-3xl md:text-6xl">Mil Opciones</h2>
        </div>

        <div className="containerCarousel3D flex justify-center my-10">
          <Carousel3D
            imgs={[
              "/assets/mil-opciones/mil-opciones1.jpg",
              "/assets/mil-opciones/mil-opciones2.jpg",
              "/assets/mil-opciones/mil-opciones3.jpg",
              "/assets/mil-opciones/mil-opciones4.jpg",
              "/assets/mil-opciones/mil-opciones5.jpg",
            ]}
            web="https://mil-opciones-client.vercel.app/"
            github=""
          />
        </div>

        <div className="text-white-100">
          <div className="max-w-4xl mx-auto p-6 my-10">
            <h1 className="text-3xl font-bold text-center mb-6">
              Web Developer at Mil Opciones
            </h1>

            <div className="mb-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Feature Development and User Interaction:
                </h3>
                <p>
                  Mil Opciones is a website based on buying and selling used
                  items with multiple functionalities. It operates like a social
                  network where users can add friends, like posts, chat, write
                  reviews, comment on posts, and more. Users earn achievements
                  as they interact with the website and its features, gaining
                  virtual currency to purchase premium utilities like boosting
                  their posts' visibility or highlighting certain products.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Product Management:
                </h3>
                <p>
                  Users can create, edit, and delete products, as well as update
                  their profiles. The main homepage offers multiple filters,
                  including a geolocation filter to display products from the
                  user's current city.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">
                  Trust Certification and Notifications:
                </h3>
                <p>
                  Selling users can take a quiz to obtain a commercial trust
                  certificate. The website also has an extensive notification
                  system that alerts users via the page and email, and features
                  a comprehensive help section.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Key Features and Functionalities:
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  Development of a social network-like platform for buying and
                  selling used items.
                </li>
                <li>
                  Implementation of user interactions such as adding friends,
                  liking posts, chatting, writing reviews, and commenting.
                </li>
                <li>
                  Achievement system rewarding users with virtual currency for
                  premium utilities.
                </li>
                <li>
                  Product management functionalities for creating, editing, and
                  deleting products.
                </li>
                <li>Geolocation-based filters on the main homepage.</li>
                <li>
                  Quiz-based certification for commercial trust for sellers.
                </li>
                <li>Extensive notification system via webpage and email.</li>
                <li>Comprehensive help section for user assistance.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mb-10">
        <h3 className="text-4xl my-10">Technologies used</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/react.png" width={40} alt="React" />
            <p>React</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/TypeScript.png" width={40} alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Redux.png" width={40} alt="Redux" />
            <p>Redux</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Node.js.png" width={40} alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Express.png" width={40} alt="Express" />
            <p>Express</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/MongoDB.png" width={40} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img
              src="/imgs/icons/Mongoose.js.png"
              width={40}
              alt="Mongoose.js"
            />
            <p>Mongoose.js</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img src="/imgs/icons/Socket.io.png" width={40} alt="Socket.io" />
            <p>Socket.io</p>
          </div>
          <div className="flex flex-col justify-items-center items-center">
            <img
              src="/imgs/icons/MaterialUI.png"
              width={40}
              alt="Material UI"
            />
            <p>Material UI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilOpciones;
