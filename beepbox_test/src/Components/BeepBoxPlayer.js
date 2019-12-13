import React, {Component} from 'react';

class BeepBoxPlayer extends Component
{
    // set up songs
    synth1 = new window.beepbox.Synth("8n31sbk0l00e00t2mm0a7g0fj07i0r1o3210T0v1L4ua7q3d6f8y4z1C0w0c1h0T1v1L4uc5q1d2fay0z1C0c1A0F0B3V1Q5000Pf800E0111T6v1L4ub8q1d2f8y2z9C0c0W75T4v1L4uf0q1z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00b40000000000g0000000001000000000040000000000p21dFHYBjq-x8i6s0FKDUB05d7AR17ghQ4swCOY2FdvQ0BXCz9OCpjQapPcMOQQpGpiV2OyMFSfh8WGE0");
    synth2 = new window.beepbox.Synth("8n51sbk2l00e05t0um0a7g0bj07i0r1o222130T1v1L4ue7q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T1v1L4ue7q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T1v1L4ue7q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T1v1L4ue7q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T1v1L4ue7q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T4v1L4uf0q1z6666ji8k8k3jSBKSJJAArriiiiii07JCABrzrrrrrrr00YrkqHrsrrrrjr005zrAqzrjzrrqr1jRjrqGGrrzsrsA099ijrABJJJIAzrrtirqrqjqixzsrAjrqjiqaqqysttAJqjikikrizrHtBJJAzArzrIsRCITKSS099ijrAJS____Qg99habbCAYrDzh00b4y4h4y4h4y4h4y4h4y4h4y4h000h000h000h000h00000000p22bITE_kSpuepE-pFCCqpFC3CCp6qVFCCqpwFFCGsCgarbOld7Nw6gCUDBdjEXJdvNh8llkp5mg1jq_aq_1HOIhAaqfH8EGIGOaIza0ITjYsPq_kIR_1diiwarnVAkSnQCNuAQuaCFY000");
    synth3 = new window.beepbox.Synth("8n41sbk7l00e03t0um1a7g0fj07i0r1o22100T1v1L4u01q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T1v1L3u01q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T1v1L4ue7q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T1v1L4u01q3d5f8y2z1C1c0A0F5B3V1Q0040Pea77E0b78T2v1L4u15q0d1f8y0z1C2w0b4h400000000h4g000000034y000000004h4h4h4h4h4h4g00000000p21xFL5-4SLEwarQvl0mq_494R_cwCzMXs1MmgN6hFGtuyy1EScCxcL2rnQv8B4xO99o3wQxAU990FJv7jkU52qfz9EO6rnQC8000");
    synth4 = new window.beepbox.Synth("5sbk4l00e0ftaa7g0fj7i0r1w1100f0000d1110c0000h0000v2200o3320b4z8Ql6hkpUsiczhkp5hDxN8Od5hAl6u74z8Ql6hkpUsp24ZFzzQ1E39kxIceEtoV8s66138l1S0L1u2139l1H39McyaeOgKA0TxAU213jj0NM4x8i0o0c86ywz7keUtVxQk1E3hi6OEcB8Atl0q0Qmm6eCexg6wd50oczkhO8VcsEeAc26gG3E1q2U406hG3i6jw94ksf8i5Uo0dZY26kHHzxp2gAgM0o4d516ej7uegceGwd0q84czm6yj8Xa0Q1EIIctcvq0Q1EE3ihE8W1OgV8s46Icxk7o24110w0OdgqMOk392OEWhS1ANQQ4toUctBpzRxx1M0WNSk1I3ANMEXwS3I79xSzJ7q6QtEXgw0");

    // Method to play the synth tracks
    pause_or_play_it = (ev, song) =>
    {
        console.log("User clicked button " + song);

        switch (song) {
            case 1:
                console.log("First");
                this.synth1.paused ? this.synth1.play() : this.synth1.pause();
                break;
            case 2:
                console.log("Second");
                this.synth2.paused ? this.synth2.play() : this.synth2.pause();
                break;
            case 3:
                console.log("Third");
                this.synth3.paused ? this.synth3.play() : this.synth3.pause();
                break;
            case 4:
                console.log("Fourth");
                this.synth4.paused ? this.synth4.play() : this.synth4.pause();
                break;
            default:
                console.log("No idea what song...");
        }
    };


    render()
    {
        return (
            <div>
                <h1>Click to Play the Selection</h1>
                <div id={"player_buttons"}>
                    <button id='1' onClick={(ev) => this.pause_or_play_it(ev, 1)}>1</button>
                    <button id='2' onClick={(ev) => this.pause_or_play_it(ev, 2)}>2</button>
                    <button id='3' onClick={(ev) => this.pause_or_play_it(ev, 3)}>3</button>
                    <button id='4' onClick={(ev) => this.pause_or_play_it(ev, 4)}>4</button>
                </div>
            </div>
        );
    }
}

export default BeepBoxPlayer;