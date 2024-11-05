import { type FC, type ReactNode } from "react";

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
}

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox: FC<InfoBoxProps> = (props) => {
  const { mode, children } = props;
  if (mode === 'warning') {
    return (
      <aside className={`infobox infobox-warning warning--${props.severity}`}>
        <h1>Warning</h1>
        <p>{children}</p>
      </aside>
    )
  }

  return (
    <aside className="infobox infobox-hint">
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;