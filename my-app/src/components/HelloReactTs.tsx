import * as React from 'react';

interface IProps {
  name: string;
  sex?: string;
}

function HelloReactTs({ name, sex = '女' }: IProps) {
  return (
    <div>
      <h1>Hi, 我是{ name }, 一名{ sex }生</h1>
    </div>
  )
}

export default HelloReactTs