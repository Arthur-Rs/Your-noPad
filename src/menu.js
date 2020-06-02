class menuController {
  constructor(button, box, height) {
    this.button = document.getElementById(button);
    this.box = document.getElementById(box);
    this.height = height;
    this.contentBox = this.box.firstElementChild;
    this.Open = false;

    this.box.addEventListener("mouseleave", () => {
      this.closeAnimation();
      this.Open = false;
    });

    this.button.addEventListener("mouseenter", () => {
      this.openAnimation();
    });

    this.button.addEventListener("click", () => {
      this.Open = true;
    });

    this.box.addEventListener("mouseenter", () => {});

    this.button.addEventListener("mouseleave", () => {
      if (!this.Open) {
        this.closeAnimation();
      }
    });
  }

  // Animações
  openAnimation() {
    this.box.style.display = "flex";
    this.contentBox.style.display = "none";
    animate = this.box.animate(
      [
        {
          height: "0px",
        },
        { height: `${this.height}px` },
      ],
      200
    );

    animate.onfinish = () => {
      this.contentBox.style.display = "flex";
      animateContent = this.contentBox.animate(
        [
          {
            opacity: "0",
          },
          {
            opacity: "1",
          },
        ],
        100
      );
    };
  }

  closeAnimation() {
    animateContent = this.contentBox.animate(
      [
        {
          opacity: "1",
        },
        {
          opacity: "0",
        },
      ],
      100
    );

    animateContent.onfinish = () => {
      this.contentBox.style.display = "none";

      animate = this.box.animate(
        [
          {
            height: `${this.height}px`,
          },
          {
            height: "0px",
          },
        ],
        200
      );
      animate.onfinish = () => {
        this.box.style.display = "none";
      };
    };
  }
}

const files = new menuController("button-file", "box-file", 300);
const edit = new menuController("button-edit", "box-edit", 250);
const add = new menuController("button-add", "box-add", 100);
const format = new menuController("button-format", "box-format", 150);
