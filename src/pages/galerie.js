import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

import Lightbox from "lightbox-react";
import "lightbox-react/style.css";

import { FaChevronDown } from "react-icons/fa";

import { css } from "glamor";

const Photo = ({ photo, photoCollection, openLightbox }) => {
  return (
    <li
      css={{
        listStyleType: "none",
        width: "300px",
        height: "200px"
      }}
    >
      <a
        href={photo.publicURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => {
          e.preventDefault();
          openLightbox(photoCollection.photos.indexOf(photo));
        }}
      >
        <Img fixed={photo.fixed} />
      </a>
    </li>
  );
};

const videoIDs = [
  "GvO0ehKI_U4",
  "QjeQ5GO58m8",
  "WBgX-Nu7lLw",
  "qLCoPNgR2kk",
  "Ee3DRqwOvqs",
  "zCaG5hZKbHM"
];

class VideoCollection extends React.Component {
  render() {
    const { toggleCollection, collectionToggleState } = this.props;
    const collectionID = "VideoCollection";
    return (
      <div css={{ margin: "15px auto" }}>
        <h2
          css={{
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "hsla(0, 100%, 100%, 0.16)",
            padding: "30px 0",
            // border: '1px solid white',
            borderRadius: "5px",
            ":hover": {
              backgroundColor: "hsla(0, 100%, 100%, 0.20)"
            },
            ":active": {
              backgroundColor: "hsla(0, 100%, 100%, 0.22)"
            }
          }}
          onClick={() => {
            toggleCollection(collectionID);
          }}
        >
          Videa <FaChevronDown css={{ verticalAlign: "top !important" }} />
        </h2>
        <ul
          css={{
            display: "flex",
            margin: 0,
            justifyContent: "space-around",
            flexFlow: "row wrap",

            maxHeight: collectionToggleState[collectionID]
              ? `${this.refs[collectionID].scrollHeight}px`
              : "0px",
            overflow: "hidden",
            transition: `max-height 0.6s ease-out`
          }}
          ref={collectionID}
        >
          {videoIDs.map(video => (
            <li
              css={{
                listStyleType: "none"
              }}
            >
              <iframe
                title={`Youtube video ${video}`}
                css={{
                  width: "450px",
                  maxWidth: "100%",
                  height: `${9 / 16 * 450}px`,
                  border: "1px solid hsla(0, 0%, 100%, 0.25)",
                  borderRadius: "5px"
                }}
                src={`https://www.youtube-nocookie.com/embed/${video}?rel=0`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </li>
          ))}
          <li
            css={{
              width: "450px",
              height: 0,
              display: "inline-block",
              margin: 0
            }}
          />
          <li
            css={{
              width: "450px",
              height: 0,
              display: "inline-block",
              margin: 0
            }}
          />
        </ul>
      </div>
    );
  }
}

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxOpen: false,
      currentImage: 0
    };
  }
  openLightbox = index => {
    this.setState({
      lightboxOpen: true,
      currentImage: index
    });
  };
  render() {
    const {
      photoCollection,
      toggleCollection,
      collectionToggleState
    } = this.props;

    const collectionID = photoCollection.id;

    return (
      <div css={{ margin: "15px auto" }}>
        {this.state.lightboxOpen && (
          <Lightbox
            mainSrc={
              photoCollection.photos[this.state.currentImage].publicURL
            }
            nextSrc={
              photoCollection.photos[
                (this.state.currentImage + 1) %
                photoCollection.photos.length
              ].publicURL
            }
            prevSrc={
              photoCollection.photos[
                (this.state.currentImage +
                  photoCollection.photos.length -
                  1) %
                photoCollection.photos.length
              ].publicURL
            }
            onCloseRequest={() =>
              this.setState({
                lightboxOpen: false
              })
            }
            onMovePrevRequest={() =>
              this.setState(prevState => ({
                currentImage:
                  (prevState.currentImage + photoCollection.photos.length - 1) %
                  photoCollection.photos.length
              }))
            }
            onMoveNextRequest={() =>
              this.setState(prevState => ({
                currentImage:
                  (prevState.currentImage + 1) % photoCollection.photos.length
              }))
            }
          />
        )}
        <h2
          css={{
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "hsla(0, 100%, 100%, 0.16)",
            padding: "30px 0",
            // border: '1px solid white',
            borderRadius: "5px",
            ":hover": {
              backgroundColor: "hsla(0, 100%, 100%, 0.20)"
            },
            ":active": {
              backgroundColor: "hsla(0, 100%, 100%, 0.22)"
            }
          }}
          onClick={() => {
            toggleCollection(collectionID);
          }}
        >
          {photoCollection.name}{" "}
          <FaChevronDown css={{ verticalAlign: "top !important" }} />
        </h2>
        <ul
          css={{
            display: "flex",
            margin: 0,
            justifyContent: "space-around",
            flexFlow: "row wrap",

            maxHeight: collectionToggleState[collectionID]
              ? `${this.refs[collectionID].scrollHeight}px`
              : "0px",
            overflow: "hidden",
            transition: `max-height 0.6s ease-out`
          }}
          ref={collectionID}
        >
          {photoCollection.photos.map(photo => (
            <Photo
              photo={photo}
              photoCollection={photoCollection}
              key={`${photoCollection.id}_${photo.name}`}
              openLightbox={this.openLightbox}
            />
          ))}
          <li
            css={{
              width: "300px",
              height: 0,
              display: "inline-block",
              margin: 0
            }}
          />
          <li
            css={{
              width: "300px",
              height: 0,
              display: "inline-block",
              margin: 0
            }}
          />
          <li
            css={{
              width: "300px",
              height: 0,
              display: "inline-block",
              margin: 0
            }}
          />
        </ul>
      </div>
    );
  }
}

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    const photoCollections = [];

    let currentAlbumID;
    props.data.galleryPhotos.edges.forEach(function(edge) {
      const photoData = {
        name: edge.node.name,
        fixed: edge.node.childImageSharp.fixed,
        publicURL: edge.node.publicURL
      };

      const [albumID, albumName] = edge.node.relativeDirectory
        .slice(15)
        .split("-");
      if (currentAlbumID !== albumID) {
        currentAlbumID = albumID;
        photoCollections.push({
          id: `photoalbum_${albumID}`,
          name: albumName,
          photos: [photoData]
        });
      } else {
        photoCollections[parseInt(albumID) - 1].photos.push(photoData);
      }
    });

    this.state = {
      photoCollections,
      collectionToggleState: {}
    };

    this.toggleCollection = this.toggleCollection.bind(this);
  }
  componentDidMount() {}
  toggleCollection = collectionID => {
    this.setState(prevState => {
      return {
        collectionToggleState: Object.assign(
          {},
          prevState.collectionToggleState,
          { [collectionID]: !prevState.collectionToggleState[collectionID] }
        )
      };
    });
  };
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <div
          css={{
            height: "100vh",
            minHeight: "640px",
            minWidth: "100vw",
            position: "fixed",
            bottom: "0",
            zIndex: -1,
            overflow: "hidden"
          }}
        >
          <Img
            css={{
              height: "100vh",
              minHeight: "640px",
              width: "calc(100vh * (682/1024) * 1.9)",
              minWidth: "426px",
              margin: 0,
              //overflow: "visible !important",
              marginLeft: "calc(50% - ((1/2) * (100vh * (682/1024) * 1.8)))",
              "@media (max-width : 767px)": {
                marginLeft: "0"
              }
            }}
            fluid={data.background.edges[0].node.childImageSharp.fluid}
          />
        </div>
        <div
          css={{
            width: "960px",
            maxWidth: "100vw",
            margin: "0 auto",
            paddingBottom: "27px",
            "@media (max-width : 767px)": {
              width: "100vw"
            }
          }}
        >
          <div
            css={{
              maxWidth: "90vw",
              textAlign: "justify",
              margin: "0 auto",
              "@media (max-width : 767px)": {
                padding: "0 5px"
              }
            }}
          >
            <h1
              css={{
                paddingBottom: "20px",
                paddingTop: "5px",
                textAlign: "center"
              }}
            >
              Galerie
            </h1>
            <VideoCollection
              toggleCollection={this.toggleCollection}
              collectionToggleState={this.state.collectionToggleState}
            />
            {this.state.photoCollections.map(photoCollection => (
              <Collection
                photoCollection={photoCollection}
                toggleCollection={this.toggleCollection}
                collectionToggleState={this.state.collectionToggleState}
                key={photoCollection.id}
              />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default GalleryPage;

export const query = graphql`
  query GalleryQuery {
    galleryPhotos: allFile(
      filter: { relativeDirectory: { regex: "/(gallery_photos)/" } }
      sort: { order: ASC, fields: [relativeDirectory, birthTime] }
    ) {
      edges {
        node {
          name
          relativeDirectory
          publicURL
          childImageSharp {
            fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }

    background: allFile(filter: { name: { eq: "090" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
