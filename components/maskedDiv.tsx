'use client';

import {
    isConnected,
    requestAccess,
    signTransaction,
} from "@stellar/freighter-api";

import { useParams } from 'next/navigation';
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { xdr, } from "@stellar/stellar-sdk";

interface PayPageProps {
    params: {
        amount: string;
        receiver: string;
        key?: string;
        sender?: string;
    };
}

export default function PayPage({ params }: PayPageProps) {

    const { amount, receiver, key, sender } = params

    async function pay() {
        if (await isConnected()) {
            console.log("user has freighter")
        }
        else {
            alert("no freighter installed")
            return
        }

        try {
            let publicKey = await requestAccess();
        } catch (e) {
            alert(e)
        }

        try {
            const userSignedTransaction = await signTransaction(String(xdr))
        } catch (e) {
            alert(e)
        }



    }

    return (
        <div className="h-screen w-full flex items-center flex-col justify-center mx-8 overflow-hidden md:flex-row">
            <MaskContainer
                revealText={
                    <p className="max-w-4xl mx-auto text-white-800 text-center text-4xl font-bold">
                        Successfully fetched the request.
                    </p>
                }
                className="h-[40rem] rounded-md"
            >
                A <span className="text-red-500">simplest</span> way to send and receive funds. A simplest way to
                <span className="text-red-500">onboard</span> users to
                <span className="text-red-500">web3</span>.
            </MaskContainer>

            <Card className="w-[350px] mx-36">
                <CardHeader>
                    <CardTitle>Pay {amount}</CardTitle>
                    <CardDescription>To {receiver}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-center">
                    <Button className=" flex w-52" onClick={() => pay()}>Pay</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
