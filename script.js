      // Fetch all the objects groups
function factory(){
      var GreenTallerBuilding = document.getElementsByClassName('GreenTallerBuilding');
      var sinGreen = document.getElementsByClassName('sinGreen');
      var BicycleGreen = document.getElementsByClassName('bicycleGreen');
      var watterTankRed = document.getElementsByClassName('watterTankRed');
      var furtherChimneyRed = document.getElementsByClassName('furtherChimneyRed');
      var GreenTallerBuilding = document.getElementsByClassName('GreenTallerBuilding');
      var RedBuildingsTri = document.getElementsByClassName('RedBuildingsTri');
      var widestRedBuilding = document.getElementsByClassName('widestRedBuilding');
      var windows = document.getElementsByClassName('windows');
      var solarPanel = document.getElementsByClassName('solarPanelGreen');
      var wings = document.getElementsByClassName('wings');
      var windmillGreen = document.getElementsByClassName('windmillGreen');
      var craneRed = document.getElementsByClassName('craneRed');
      var circularAntennaGreen = document.getElementsByClassName('circularAntennaGreen');
      var smallerChimneyRed = document.getElementsByClassName('smallerChimneyRed');
      var frontChimneyRed = document.getElementsByClassName('frontChimneyRed');
      var furtherChimneyRed = document.getElementsByClassName('furtherChimneyRed');
      var widestGreenBuilding = document.getElementsByClassName('widestGreenBuilding');
      var furtherRedBuilding = document.getElementsByClassName('furtherRedBuilding');
      var RedSmoke = document.getElementsByClassName('RedSmoke');

      new TimelineMax().staggerFromTo(
        circularAntennaGreen,1,
        {
          x:200
        },{
          x:0
        }
      );

      for (var i = 0; i < 3; i++) {
        new TimelineMax().staggerFromTo(
              document.getElementsByClassName('RedFloor'+ i), 0.7,
              {
                x:-200,
                scaleX:0
              },
              {
                x:0,
                scaleX:1,
                delay:0.75 + i*.1,
                ease: Power2.easeOut,
              }
        );
      }

      for (var i = 0; i < 3; i++) {
        new TimelineMax().staggerFromTo(
              document.getElementsByClassName('GreenFloor'+ i), 0.7,
              {
                x:200,
                scaleX:0
              },
              {
                x:0,
                scaleX:1,
                delay:0.75 + i*.1,
                ease: Power2.easeOut,
              }
        );
      }

      new TimelineMax().staggerFromTo(
            furtherRedBuilding, 1,
            {
              scaleY:0,
              transformOrigin:"bottom"
            },
            {
              scaleY:1,
              delay:1,
              ease: Back.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            RedSmoke, 0.5,
            {
              skewX:5,
              transformOrigin:"bottom"
            },
            {
              skewX:-5,
              repeat:-1,
              yoyo:true,
              delay:1,
              ease: "linear",
            }
      );
      new TimelineMax().staggerFromTo(
            RedSmoke, 0.3,
            {
              scaleY:0,
              transformOrigin:"bottom"
            },
            {
              scaleY:1,
              delay:0.7,
              ease: "linear",
            }
      );

      new TimelineMax().staggerFromTo(
            smallerChimneyRed, 1,
            {
              scaleY:0,
              transformOrigin:"bottom"
            },
            {
              scaleY:1,
              delay:1.3,
              ease: Back.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            widestGreenBuilding, 1,
            {
              scaleY:0,
              transformOrigin:"bottom"
            },
            {
              scaleY:1,
              delay:0.3,
              ease: Back.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            frontChimneyRed, 0.7,
            {
              scaleY:0,
              transformOrigin:"bottom"
            },
            {
              scaleY:1,
              delay:1.5,
              ease: Back.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            furtherChimneyRed, 0.7,
            {
              scaleY:0,
              transformOrigin:"bottom"
            },
            {
              scaleY:1,
              delay:1.7,
              ease: Back.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            craneRed, 1,
            {
              y:-300,
              transformOrigin:"center"
            },
            {
              y:0,
              scaleY:1,
              delay:1.2,
              ease: Bounce.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            RedBuildingsTri, 1,
            {
              scale:0,
              transformOrigin:"center bottom"
            },
            {
              scale:1,
              ease: Back.easeOut,
              delay:0.5
            }
          );

      new TimelineMax().staggerFromTo(
            watterTankRed, 1,
            {
              scale:0,
              transformOrigin:"center bottom"
            },
            {
              scale:1,
              ease: Back.easeOut,
              delay:0.25
            }
          );

      new TimelineMax().staggerFromTo(
            GreenTallerBuilding, 1,
            {
              scale:0,
              transformOrigin:"right bottom"
            },
            {
              scale:1,
              ease: Back.easeOut,
              delay:0.5
            }
          );

      new TimelineMax().staggerFromTo(
            sinGreen, 1,
            {
              scaleY:0
            },
            {
              scaleY:1,
              ease: Bounce.easeOut,
            }
          );


      new TimelineMax().staggerFromTo(
            BicycleGreen, 1,
            {
              scaleX:-1,
              x:500
            },
            {
              x:150,
              delay:0.75,
              ease: Power2.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            widestRedBuilding, 1,
            {
              x:-200,
            },
            {
              x:0,
              delay:1,
              ease: Power2.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            windows, 1,
            {
              x:-200,
            },
            {
              x:0,
              delay:1.25,
              ease: Power2.easeOut,
            }
      );


      for (var i = 0; i < 16; i++) {
        new TimelineMax().staggerFromTo(
              document.getElementsByClassName('AntennaGreen'+ i), 1,
              {
                y:-200,
              },
              {
                y:0,
                delay:0.5 + i*.1,
                ease: Power2.easeOut,
              }
        );
      }


      new TimelineMax().staggerFromTo(
            solarPanel, 1,
            {
              scaleY:0,
              transformOrigin:"center bottom"
            },
            {
              scaleY:1,
              delay:1.5,
              ease: Bounce.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            windmillGreen, 1,
            {
              scaleY:0,
              transformOrigin:"center bottom"
            },
            {
              scaleY:1,
              delay:1.5,
              ease: Back.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            wings, 1,
            {
              transformOrigin:"122px 162px",
              rotation:0
            },
            {
              rotation:360,
              repeat:-1,
              delay:1.5,
              ease: "linear",
            }
      );

      new TimelineMax().staggerFromTo(
            craneRed, 1,
            {
              y:-300,
              transformOrigin:"center"
            },
            {
              y:0,
              scaleY:1,
              delay:1.2,
              ease: Bounce.easeOut,
            }
      );

      new TimelineMax().staggerFromTo(
            craneRed, 1,
            {
              y:-300,
              transformOrigin:"center"
            },
            {
              y:0,
              scaleY:1,
              delay:1.2,
              ease: Bounce.easeOut,
            }
      );
}

document.addEventListener("DOMContentLoaded",
  function(event){
    setInterval(factory,4000);
  }
);