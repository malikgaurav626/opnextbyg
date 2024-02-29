"use client";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import "./button.scss";
import "./modal.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [modalClass, setModalClass] = useState("");
  const [currentCharacter, setCurrentCharacter] = useState(-1);
  const [isVoyageActive, setIsVoyageActive] = useState(false);
  const [isFinalBodyActive, setIsFinalBodyActive] = useState(false);
  const handleButtonClick = () => {
    document.getElementById("modal-container").classList.remove("out");
    document.getElementById("modal-container").classList.add("one");
  };
  return (
    <>
      <LoginScreen
        currentCharacter={currentCharacter}
        handleButtonClick={handleButtonClick}
      />
      <CharacterMenu
        setCurrentCharacter={setCurrentCharacter}
        modalClass={modalClass}
        setIsVoyageActive={setIsVoyageActive}
        isFinalBodyActive={isFinalBodyActive}
        setIsFinalBodyActive={setIsFinalBodyActive}
      />
      <VoyageScreen
        currentCharacter={currentCharacter}
        setCurrentCharacter={setCurrentCharacter}
        isVoyageActive={isVoyageActive}
        setIsVoyageActive={setIsVoyageActive}
        setIsFinalBodyActive={setIsFinalBodyActive}
      />
      <FinalDashboard
        setCurrentCharacter={setCurrentCharacter}
        isFinalBodyActive={isFinalBodyActive}
      />
    </>
  );
}

function CharacterMenu({
  setCurrentCharacter,
  modalClass,
  setIsVoyageActive,
  isFinalBodyActive,
  setIsFinalBodyActive,
}) {
  function handleClose() {
    document.getElementById("modal-container").classList.add("out");
  }

  const characters = [
    {
      name: "LUFFY",
      tagline: "THE RUBBER BANDED RASCAL",
      image: "/luffy.png",
      nameColor: "#53f9f1",
      topColor: "#bafb27",
      bottomColor: "#75fff7",
      characterBackground: "#3cb6cd",
      pickLeft: "#83ffd0",
      pickRight: "#b3ff48",
    },
    {
      name: "ZORO",
      tagline: "THE SWORD WEILDING SLEEPWALKER",
      image: "/zoro.png",

      nameColor: "#53f8b8",
      topColor: "#9E23FF",
      bottomColor: "#75FFC7",
      characterBackground: "#5eb591",
      pickLeft: "#7cdcd0",
      pickRight: "#9263ee",
    },
    {
      name: "SANJI",
      tagline: "The KICKIN' COOK WITH A HEART OF GOLD",
      image: "/sanji (2).png",
      nameColor: "#e77a43",
      topColor: "#f61cdc",
      bottomColor: "#fea775",
      characterBackground: "#b36d46",
      pickLeft: "#f88a86",
      pickRight: "#ff34ce",
    },
    {
      name: "USOPP",
      tagline: "THE LONG NOSED SNIPER KING",
      image: "/usopp.png",
      nameColor: "#e0e148",
      topColor: "#f51f13",
      bottomColor: "#fcff75",
      characterBackground: "#a29e43",
      pickLeft: "#fdd563",
      pickRight: "#f34823",
    },
    {
      name: "JINBE",
      tagline: "THE FISH MAN WITH A KNACK FOR DIPLOMACY",
      image: "/jinbe.png",
      nameColor: "#a1bafa",
      topColor: "#0ff069",
      bottomColor: "#75a4fe",
      characterBackground: "#6981b0",
      pickLeft: "#63b3e3",
      pickRight: "#1ee77f",
    },
    {
      name: "NAMI",
      tagline: "THE SAVVY NAVIGATOR AND WEATHER",
      image: "/nami.png",
      nameColor: "#efb7a1",
      topColor: "#5946e5",
      bottomColor: "#ff8e75",
      characterBackground: "#d79e69",
      pickLeft: "#e0818b",
      pickRight: "#7a55c7",
    },
    {
      name: "BROOK",
      tagline: "THE SOULFUL SKELETON WITH AN AFRO TO DIE",
      image: "/brook.png",
      nameColor: "#edf49f",
      topColor: "#e74db4",
      bottomColor: "#fefb97",
      characterBackground: "#a8a997",
      pickLeft: "#fedd9f",
      pickRight: "#fd75b7",
    },
    {
      name: "FRANKY",
      tagline: "THE COLA FUELED SHIPWRIGHT",
      image: "/franky2.png",
      nameColor: "#53f444",
      topColor: "#5c86ee",
      bottomColor: "#9fff97",
      characterBackground: "#68b06f",
      pickLeft: "#94eaa9",
      pickRight: "#699ee5",
    },
    {
      name: "CHOPPER",
      tagline: "THE CUTEST DOCTOR TO EVER SAIL THE GRAND LINE",
      image: "/chopper2.png",
      nameColor: "#ff4f4f",
      topColor: "#99d2ef",
      bottomColor: "#fe2121",
      characterBackground: "#db8281",
      pickLeft: "#eb444a",
      pickRight: "#abbbd4",
    },
    {
      name: "NICO ROBIN",
      tagline: "THE HISTORY BUFF WITH MANY HANDS",
      image: "/robin.png",
      nameColor: "#ad62f3",
      topColor: "#eaf792",
      bottomColor: "#9021fe",
      characterBackground: "#9e94c5",
      pickLeft: "#a44deb",
      pickRight: "#e3e0a6",
    },
  ];

  return (
    <>
      <div id="modal-container" className={modalClass}>
        <div className="modal-background">
          <div className="modal">
            <div className="modal-header">
              <div className="modal-heading">PICK YER PIRATE</div>
              <div className="close-btn" onClick={handleClose}>
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.000000pt"
                  height="24.000000pt"
                  viewBox="0 0 512.000000 512.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                    fill="#fff"
                    stroke="none"
                  >
                    <path
                      d="M2332 5110 c-611 -59 -1163 -320 -1589 -751 -406 -411 -648 -908
-725 -1489 -16 -123 -16 -497 0 -620 77 -581 319 -1078 725 -1489 214 -216
414 -360 692 -496 366 -181 705 -259 1120 -259 224 0 326 9 510 46 603 121
1134 450 1525 946 141 179 292 455 374 684 529 1471 -349 3055 -1874 3382
-209 45 -554 65 -758 46z m485 -405 c158 -20 289 -48 414 -89 708 -230 1253
-816 1428 -1537 338 -1395 -732 -2722 -2159 -2676 -246 8 -416 37 -633 109
-592 196 -1086 666 -1321 1258 -106 269 -152 539 -143 850 6 220 26 356 81
545 106 367 296 678 582 955 339 327 744 521 1224 584 142 19 383 19 527 1z"
                    />
                    <path
                      d="M1781 3448 c-49 -24 -95 -87 -105 -144 -5 -21 -1 -55 8 -87 14 -48
36 -73 311 -347 l295 -295 -289 -290 c-159 -159 -296 -304 -304 -320 -51 -101
-12 -221 87 -272 42 -22 132 -21 176 2 19 10 166 147 325 306 l291 289 284
-286 c162 -162 302 -294 325 -306 85 -45 200 -16 252 63 35 53 43 140 18 190
-9 19 -148 166 -308 326 l-292 293 292 293 c191 191 298 305 308 329 69 166
-100 334 -260 259 -26 -12 -141 -120 -325 -305 -157 -157 -289 -286 -295 -286
-5 0 -140 130 -300 290 -192 191 -303 294 -327 305 -52 21 -115 19 -167 -7z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="modall-body mt-3">
              <div className="character-container" id="character-container-id">
                {characters.map((character, index) => (
                  <div
                    className="character"
                    key={"char" + index}
                    id={"char" + index}
                    onClick={() => {
                      setCurrentCharacter(index);
                      document
                        .getElementById("modal-container")
                        .classList.add("out");
                      setIsVoyageActive(true);
                      if (isFinalBodyActive) {
                        document
                          .getElementById("final-dashboard-id")
                          .classList.add("gotop");
                        setTimeout(() => {
                          document.getElementById(
                            "final-dashboard-id"
                          ).style.transition = "none";
                          setIsFinalBodyActive(false);
                          setTimeout(() => {
                            setTimeout(() => {
                              document
                                .getElementById("final-dashboard-id")
                                .classList.remove("gotop");

                              setTimeout(() => {
                                document.getElementById(
                                  "final-dashboard-id"
                                ).style.transition = "0.7s all";
                              }, 700);
                            }, 700);
                          }, 700);
                        }, 700);
                      }
                    }}
                  >
                    <div className="left-section">
                      <div
                        className="character-name-background"
                        style={{
                          backgroundColor: character.characterBackground,
                        }}
                      >
                        <div className="character-background-name">
                          {character.name}
                        </div>
                        <div className="character-background-image"></div>
                      </div>
                      <div className="character-image">
                        <img
                          src={character.image}
                          id={"char-img-id-" + index}
                          alt=""
                        />
                      </div>
                      <div className="character-info">
                        <div className="character-tagline">
                          {character.tagline}
                        </div>
                        <div
                          className="character-name"
                          style={{
                            color: character.nameColor,
                          }}
                        >
                          {character.name}
                        </div>
                        <div
                          className="character-pick-btn"
                          style={{
                            "--var-left": character.pickLeft,
                            "--var-right": character.pickRight,
                          }}
                        >
                          Pick
                        </div>
                      </div>
                    </div>
                    <div className="right-section">
                      <div
                        className="tarps"
                        style={{
                          background: `linear-gradient(to bottom, ${character.topColor}, ${character.bottomColor})`,
                        }}
                      >
                        <img src="/border.png" className="border" alt="" />
                        <img src="/shadow.png" className="shadow" alt="" />
                        <div className="subtracts"></div>
                        <div className="subtracts translated"></div>
                        <div
                          className="hundo"
                          style={{
                            color: character.bottomColor,
                          }}
                        >
                          100
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-active"></div>
    </>
  );
}

function LoginScreen({ currentCharacter, handleButtonClick }) {
  return (
    <div
      className={"login-container " + (currentCharacter != -1 && "inactive")}
      id="login-container-id"
    >
      <div className="background-image" id="layer-1">
        <img src="/login screen layer 1.png" alt="login image" />
      </div>
      <div className="background-background-image" id="layer-2">
        <img src="/login screen background.png" alt="login background" />
      </div>
      <div className="login-btn" onClick={handleButtonClick}>
        <a>Join Crew</a>
      </div>
    </div>
  );
}

function VoyageScreen({
  currentCharacter,
  setCurrentCharacter,
  isVoyageActive,
  setIsVoyageActive,
  setIsFinalBodyActive,
}) {
  const animation1 = useRef(null);
  const animation2 = useRef(null);
  const animation3 = useRef(null);
  const animation4 = useRef(null);
  const animation5 = useRef(null);
  const [currentVoyage, setCurrentVoyage] = useState(0);
  const [isParrotSelected, setIsParrotSelected] = useState(false);
  const [isShoutChecked, setIsShoutChecked] = useState(false);
  const [isFinalActive, setIsFinalActive] = useState(false);
  function handleHoistClick() {
    document.getElementById("hoist-btn-id").classList.add("forward");
    document.getElementById("hoist-btn-id").style.animation =
      "ScaleUpDown 5s infinite";
    document
      .getElementById("hoist-content-id")
      .classList.add("content_forward");

    setTimeout(() => {
      document
        .getElementById("hoist-content-id")
        .removeChild(document.getElementById("hoist-content-id").firstChild);
      document
        .getElementById("hoist-content-id")
        .removeChild(document.getElementById("hoist-content-id").firstChild);
    }, 1000);
    setTimeout(() => {
      document
        .getElementById("hoist-content-id")
        .classList.remove("content_forward");
      document.getElementById("hoist-btn-id").classList.remove("forward");
      document.getElementById("hoist-btn-id").style.animation = "none";
      document.getElementById("hoist-content-id").style.animation =
        "zeroWidth 1s forwards 1s";
      document.getElementById("hoist-btn-id").style.animation =
        "zeroWidth 1s forwards 1s";
    }, 5000);
    setTimeout(() => {
      document.getElementById("hoist-btn-id").style.transform =
        "translate(-130px, -50%) scale(0.9)";
      document.getElementById("hosted-success-id").style.opacity = 1;
    }, 6000);

    setTimeout(() => {
      setCurrentVoyage(1);
      let index = 0;
      const messages = ["VOYAGE", "PENDING !", "        "];

      animation1.current = anime({
        targets: ".vert-voyage-white-box",
        duration: 500,
        easing: "easeInOutSine",
        height: ["0%", "110%"],
        autoplay: false,
        delay: 2000,
        complete: function () {
          document.getElementById("vertical-voyage-id").innerText =
            messages[index];
          index = (index + 1) % messages.length;
          animation2.current.play();
        },
      });

      animation2.current = anime({
        targets: ".vert-voyage-white-box",
        duration: 500,
        easing: "easeInOutSine",
        height: ["110%", "0%"],
        autoplay: false,
        loopComplete: function () {
          animation1.current.play();
        },
      });

      animation1.current.play();
    }, 8000);
  }

  useEffect(() => {
    if (isParrotSelected && isShoutChecked) {
      setIsParrotSelected(false);
      setIsShoutChecked(false);
      setCurrentVoyage(2);
      animation3.current = anime({
        targets: ".voyage-bg-img",
        translateX: ["-30%", "-160%"],
        scale: ["1.3", "1.35"],
        duration: 1000,
        delay: 500,
        easing: "easeInSine",
        loopComplete: function () {
          animation4.current.play();
        },
      });
      animation4.current = anime({
        targets: ".voyage-bg-img",
        duration: 3000,
        translateX: ["-160%", "-170%"],
        scale: [1.35, 1.65],
        delay: 500,
        easing: "easeInSine",
        loopComplete: function () {
          animation5.current.play();
        },
      });

      animation5.current = anime({
        targets: ".voyage-bg-img",
        scale: 1.65,
        duration: 500,
        easing: "easeInElastic(1,.6)",
        translateX: ["-170%", "-280%"],
      });
      animation3.current.play();

      setTimeout(() => {
        document.getElementById("voyage-ready-id").style.transition =
          "1s transform";
        document.getElementById("voyage-ready-id").style.transform =
          "translate(-50%, -50%) scale(0.6)";
        setTimeout(() => {
          document.getElementById("voyage-ready-id").style.transition =
            "3s transform ease-in";
          document.getElementById("voyage-ready-id").style.transform =
            "translate(-50%, -50%) scale(1)";

          setTimeout(() => {
            document.getElementById("voyage-ready-id").style.transition =
              "0.5s transform ease-in";
            document.getElementById("voyage-ready-id").style.transform =
              "translate(150%, -50%) scale(1)";

            setTimeout(() => {
              setIsFinalActive(true);
              setIsFinalBodyActive(true);

              setTimeout(() => {
                document.getElementById(
                  "voyage-container-id"
                ).style.transition = "none";
                setIsVoyageActive(false);
                setIsFinalActive(false);
                setTimeout(() => {
                  document.getElementById(
                    "voyage-bg-image-id"
                  ).style.transform = "translate(-30%, 6%) scale(1.3)";
                  setCurrentVoyage(0);
                  document.getElementById(
                    "voyage-container-id"
                  ).style.transition = "0.7s all";

                  document.getElementById("hoist-content-id").style.animation =
                    "none";
                  document.getElementById("hoist-btn-id").style.animation =
                    "none";

                  document.getElementById("hoist-btn-id").style.transform =
                    "translate(-50%, -50%) scale(0.9)";
                  document.getElementById(
                    "hosted-success-id"
                  ).style.opacity = 0;

                  const newImage = document.createElement("img");
                  newImage.src = "/twitter_stroke.png";
                  newImage.alt = "";
                  document
                    .getElementById("hoist-content-id")
                    .appendChild(newImage);
                  const newSpan = document.createElement("span");
                  newSpan.innerText = "Hoist Parrot";
                  document
                    .getElementById("hoist-content-id")
                    .appendChild(newSpan);

                  animation1.remove(".vert-voyage-white-box");
                  animation2.remove(".vert-voyage-white-box");
                  animation3.remove(".voyage-bg-img");
                  animation4.remove(".voyage-bg-img");
                  animation5.remove(".voyage-bg-img");
                }, 700);
              }, 700);
            }, 500);
          }, 2950);
        }, 1000);
      }, 500);
    }
  }, [isParrotSelected, isShoutChecked]);
  return (
    <>
      <div
        className={
          "voyage-container " +
          (isVoyageActive ? (isFinalActive ? "activeLeft" : "active") : "")
        }
        id="voyage-container-id"
      >
        <div className="inner-voyage-container">
          <div
            className={"voyage-bg " + (isVoyageActive && " active")}
            id="layer-3"
          >
            <img
              className="voyage-bg-img"
              id="voyage-bg-image-id"
              src="/sanji up layer.png"
              alt="voyage image"
            />
          </div>
          <div
            className={
              "paint-brush " +
              (isVoyageActive && (currentVoyage == 0 || currentVoyage == 1)
                ? "active"
                : currentVoyage == 2
                ? "active2"
                : "")
            }
          >
            <img src="/paint_brush2.png" alt="" />
          </div>
          <div className="background-background-image" id="layer-4">
            <img src="/sanji bg.png" alt="login background" />
          </div>

          <div
            className={"voyage-btn " + (isVoyageActive && "active")}
            id="hoist-btn-id"
            onClick={handleHoistClick}
          >
            <div className="content" id="hoist-content-id">
              <img src="/twitter_stroke.png" alt="" />
              <span>Hoist Parrot</span>
            </div>
          </div>
          <div
            className={
              "hosted-success " +
              (isVoyageActive && currentVoyage == 0 && "active")
            }
            id="hosted-success-id"
          >
            HOISTED SUCCESSFULLY
          </div>

          <div
            className={
              "vertical-voyage-container " +
              (isVoyageActive && currentVoyage == 1 && "active")
            }
          >
            <div className="vert-voyage-white-box"></div>
            <div
              id="vertical-voyage-id"
              className={
                "vertical-voyage " +
                (isVoyageActive && currentVoyage == 1 && "active")
              }
            ></div>
          </div>

          <div
            className={
              "user-details " +
              (currentVoyage == 1 ? "active" : currentVoyage == 2 && "active2")
            }
          >
            <div className="user-mix-blend"></div>
            <div className="user-content">
              <div className="user-image">
                <img src="/user-image.png" alt="" />
              </div>
              <div className="user-tagline">SAILING AS {"<USERNAME>"}</div>
            </div>
          </div>

          <div className={"ahoy-msg " + (currentVoyage == 1 && "active")}>
            <img src="/sidemsg.png" alt="" />
            <div className="ahoy-content">
              <p>
                <span className="a-1">Ahoy, mateys!</span> I've just joined the
                ranks of the @MugiwaraCrew as the mighty Zoro! 🏴‍☠️ Set sail with
                us on this grand adventure and choose your own character at
                <i> http://mugiwarapirates.club/?ref=398474</i>. Let's conquer
                the seas together! <span className="hashes"> #MugiPirates</span>{" "}
                <span className="hashes">#ClaimYourCrew</span>
              </p>
            </div>
            <div className="vert-line"></div>
          </div>
          <div
            onClick={() => setIsParrotSelected(true)}
            className={
              "ahoy-btn voyage-btn " + (currentVoyage == 1 && "activee")
            }
          >
            <div className="content">PARROT'S SHOUT</div>
          </div>
          <div className={"click-here " + (currentVoyage == 1 && "active")}>
            CLICK HERE TO VERIFY POST
          </div>
          <div
            onClick={() => setIsShoutChecked(true)}
            className={
              "check-shout-btn ahoy-btn voyage-btn " +
              (currentVoyage == 1 && "activeee")
            }
          >
            <div className="content">CHECK SHOUT</div>
          </div>
          <div
            className={
              "flames " +
              ((currentVoyage == 1 || currentVoyage == 2) && "active")
            }
          >
            <img src="/flames.gif" alt="" />
          </div>

          <div id="voyage-ready-id" className={"voyage-ready "}>
            <img src="/Voyage_Ready.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

function FinalDashboard({ setCurrentCharacter, isFinalBodyActive }) {
  const handleButtonClick = () => {
    document.getElementById("modal-container").classList.remove("out");
    document.getElementById("modal-container").classList.add("one");
  };
  return (
    <>
      <div
        className={
          "final-dashboard-container " + (isFinalBodyActive && "active")
        }
        id="final-dashboard-id"
      >
        <div className="background-background-image" id="layer-5">
          <img src="/final_background.jpg" alt="login background" />
        </div>
        <div className="final-background-main-image">
          <img src="/luffy_layer_new.png" alt="" />
        </div>
        <div className="back-moon">
          <img src="/moon.png" alt="" />
        </div>
        <div
          className={"copiable " + (isFinalBodyActive && "active")}
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText(
              "https://mugiwarapirates.club/?ref=398474"
            );
          }}
        >
          <img src="/scroll.png"></img>
          <div className="copiable_text">
            {(() => {
              const url = "https://mugiwarapirates.club/?ref=398474";
              const formattedUrl =
                url.length > 30
                  ? `${url.substr(0, 23)}...${url.substr(-6)}`
                  : url;
              return formattedUrl;
            })()}
          </div>
        </div>
        <div className={"export " + (isFinalBodyActive && "active")}>
          <img src="/export.png" alt="" />
        </div>
        <div className={"crews-container " + (isFinalBodyActive && "active")}>
          <div className="crew">
            <div className="crew-image">
              <img src="/crew recruited.png" alt="" />
            </div>
            <div className="crew-content">
              <div
                className="crew-title"
                style={{
                  "--var-title": "CREW RECRUITED",
                }}
              >
                CREW RECRUITED
              </div>
              <div className="crew-count-info">
                <div className="crew-count">0</div>
                <div className="crew-info">
                  Count of brave souls ye've convinced to hoist the colors and
                  join our quest.
                </div>
              </div>
            </div>
          </div>
          <div className="crew">
            <div className="crew-image second-crew">
              <img src="/onboard.png" alt="" />
            </div>
            <div className="crew-content">
              <div
                className="crew-title"
                style={{
                  "--var-title": "CREW ONBOARD",
                }}
              >
                CREW ONBOARD
              </div>
              <div className="crew-count-info">
                <div className="crew-count">0</div>
                <div className="crew-info">
                  Tally of crewmates who've weighed anchor and claimed their
                  share of the loot.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"referal-overview " + (isFinalBodyActive && "active")}>
          <div className="ref-title">REFFERAL OVERVIEW</div>
        </div>
        <div
          className={"second-crew-container " + (isFinalBodyActive && "active")}
        >
          <div className="crew">
            <div className="crew-image">
              <img src="/booty share.png" alt="" />
            </div>
            <div className="crew-content">
              <div
                className="crew-title"
                style={{
                  "--var-title": "BOOTY SHARE",
                }}
              >
                BOOTY SHARE
              </div>
              <div className="crew-count-info">
                <div className="crew-count">100000</div>
                <div className="crew-info">
                  YER SHARE OF THE PLUNDER, EARNED FROM RALLYING PIRATES TO OUR
                  BANNER.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={"character-menu-final " + (isFinalBodyActive && "active")}
        >
          <div className="claim-now">CLAIM NOW</div>
          <div className="inner-character-menu" onClick={handleButtonClick}>
            <img src="/zoro.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
