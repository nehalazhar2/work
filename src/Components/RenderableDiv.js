import { useState, useEffect } from "react";
import "../Assets/RenderableDivcss.css"

export function RenderableDiv(props) {
  const [MainObject, setMainObject] = useState(props.text);

  useEffect(() => {
    if (props.text != MainObject) {
      setMainObject(props.text);
      console.log("Update", props.text);
    }
  }, [props]);

  if (MainObject != undefined) {
    return (
      <>
        {MainObject.content.map((item, key) => {
          return (
            <div key={key}>
              {item.nodeType == "heading-1" ? (
                <h1 className="Heading_01_Font_Color">{item.content[0].value}
                </h1>
              ) : item.nodeType == "heading-2" ? (
                <h2 className="Heading_01_Font_Color">{item.content[0].value}
                </h2>
              ) : item.nodeType == "heading-3" ? (
                <h3 className="Heading_01_Font_Color">{item.content[0].value}
                </h3>
              ) : item.nodeType == "heading-4" ? (
                <h4 className="Heading_01_Font_Color">{item.content[0].value}
                </h4>
              ) : item.nodeType == "heading-5" ? (
                <h5 className="Heading_01_Font_Color">{item.content[0].value}
                </h5>
              ) : item.nodeType == "heading-6" ? (
                <h6 className="Heading_01_Font_Color">{item.content[0].value}
                </h6>
              ) : item.nodeType == "paragraph" ? (
                <p>{item.content[0].value}
                </p>
              ) : (
                <p>{item.content[0].value}
                </p>
              )}
            </div>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
}

