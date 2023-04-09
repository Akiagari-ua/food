import { memo, FC } from "react";

interface Props {}

const Header: FC<Props> = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default memo(Header);
