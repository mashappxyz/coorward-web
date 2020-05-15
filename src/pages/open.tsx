import { useState } from 'react';
import { useRouter } from "next/router";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, H3 } from "@blueprintjs/core";
import styled from 'styled-components';
import DexInfo from "../components/DexInfo";


export default function Open(): React.ReactElement {
    const router = useRouter();
    const [copied, setCopied] = useState(false);
    const { c: coordinates, d: dexId } = router.query;
    return (
        <Container>
            <DexInfo id={dexId ? parseInt(dexId.toString(), 10) : undefined} />
            <H3>Coordinates</H3>
            <H3>{coordinates}</H3>
            <CopyToClipboard text={coordinates} onCopy={() => setCopied(true)}>
                <Button>{copied ? 'Copied' : 'Copy to Clipboard'}</Button>
            </CopyToClipboard>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
`;
