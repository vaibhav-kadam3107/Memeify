import "./CanvaClone.css";
import CreativeEditorSDK from '@cesdk/cesdk-js';
import React, { useEffect, useRef } from 'react';
import { findAirtableAssets } from './airtableAssetLibrary';
import { findUnsplashAssets } from './unsplashAssetLibrary';

function CanvaClone({
  // initializing Airtable as default external asset library
  assetLibrary = 'airtable'
}) {
  const cesdkContainer = useRef(null);

  useEffect(() => {
    const externalAssetSources = {
      ...(assetLibrary === 'airtable' && {
        airtable: {
          findAssets: findAirtableAssets,
          credits: {
            name: 'Airtable',
            url: 'https://airtable.com/shr4x8s9jqaxiJxm5/tblSLR9GBwiVwFS8z?backgroundColor=orange'
          }
        }
      }),
      ...(assetLibrary === 'unsplash' && {
        unsplash: {
          findAssets: findUnsplashAssets,
          credits: {
            name: 'Unsplash',
            url: 'https://unsplash.com/'
          },
          license: {
            name: 'Unsplash license (free)',
            url: 'https://unsplash.com/license'
          }
        }
      })
    };

    // path to the local image to load into CE.SDK
    const customImagePath = `${window.location.protocol + "//" + window.location.host}/resources/programming.png`;

    let cesdk;
    let config = {
      // loading the external asset sources
      assetSources: {
        // loading the AirTable or Unsplash asset library
        ...externalAssetSources,
        // loading a custom image into CE.SDK
        custom: {
          findAssets: () => {
            return {
              assets: [{
                id: "custom-image-1",
                type: 'ly.img.image',
                locale: 'en',
                label: "Programming",
                thumbUri: customImagePath,
                size: {
                  width: 512,
                  height: 512
                },
                meta: {
                  uri: customImagePath
                },
                context: {
                  sourceId: 'custom'
                },
                credits: {
                  name: "Freepik",
                  url: "https://www.flaticon.com/free-icon/programming_1208884?related_id=1208782&origin=search"
                }
              }],
              currentPage: 1,
              total: 1,
              nextPage: undefined
            };
          }
        }
      },

      // translating the labels associates with the external asset sources
      i18n: {
        en: {
          'libraries.airtable.label': 'Airtable',
          'libraries.unsplash.label': 'Unsplash',
          'libraries.custom.label': 'Custom'
        }
      },
    };

    if (cesdkContainer.current) {
      CreativeEditorSDK.init(cesdkContainer.current, config).then(
          (instance) => {
            cesdk = instance;
          }
      );
    }

    return () => {
      if (cesdk) {
        cesdk.dispose();
      }
    };

  }, [cesdkContainer, assetLibrary]);

  return (
      <div className="caseContainer">
        <div className="wrapper">
          <div ref={cesdkContainer} className="cesdk"></div>
        </div>
      </div>
  );
};

export default CanvaClone;
