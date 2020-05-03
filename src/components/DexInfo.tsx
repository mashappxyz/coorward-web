import React from 'react';

type Props = {
    id?: number;
}

export default function DexInfo({ id }: Props): React.ReactElement {
    if (!id) return null;
    return (
        <div>
            <img src={`/static/artificial/${id.toString().padStart(3, '0')}@2x.png`} />
        </div>
    )
}
