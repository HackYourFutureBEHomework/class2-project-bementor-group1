import React, { Component } from "react";

class MainBody extends Component {
  render() {
    return (
      <main className="homePage">
        <div className="container">
          <h2 className="pageSubTitle1">About the Project</h2>
          <p className="paragraph1">
            {" "}
            The Bementor. project is about Le Lorem Ipsum est simplement du faux
            texte employé dans la composition et la mise en page avant
            impression. Le Lorem Ipsum est le faux texte standard de
            l'imprimerie depuis les années 1500, quand un imprimeur anonyme
            assembla ensemble des morceaux de texte pour réaliser un livre
            spécimen de polices de texte. Il n'a pas fait que survivre cinq
            siècles, mais s'est aussi adapté à la bureautique informatique, sans
            que son contenu n'en soit modifié.
          </p>
          <img className="main-image" alt="Female coders" />
        </div>

        <h2 className="pageSubTitle">About the Team</h2>
        <p className="paragraph">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </p>
      </main>
    );
  }
}
export default MainBody;
