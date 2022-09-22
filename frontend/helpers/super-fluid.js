import React, { useState } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";

class SuperfluidHelper {
    customHttpProvider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_RPC_URL);
    generateId() {
        return Math.floor(Math.random() * 1000000000);
    }

    async createIndex(indexId) {
        const sf = await Framework.create({
            chainId: chainId,
            provider: customHttpProvider
        });

        const signer = sf.createSigner({
            //TODO: Add a signer
            privateKey:
                "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
            provider: customHttpProvider
        });

        const USDCx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

        try {
            const createIndexOperation = sf.idaV1.createIndex({
                indexId: id,
                superToken: USDCx
                // userData?: string
            });

            console.log("Creating your Index...");

            await createIndexOperation.exec(signer);

        } catch (error) {
            console.error(error);
        }
    }

    async updateSubscription(id, address, shares) {
        const sf = await Framework.create({
            chainId: chainId,
            provider: customHttpProvider
        });

        const signer = sf.createSigner({
            //Replace with private key
            privateKey:
                "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
            provider: customHttpProvider
        });

        const USDCx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

        try {
            const updateSubscriptionOperation = sf.idaV1.updateSubscriptionUnits({
                indexId: id,
                superToken: USDCx,
                subscriber: address,
                units: shares
                // userData?: string
            });

            console.log("Updating your Index...");

            await updateSubscriptionOperation.exec(signer);

        } catch (error) {
            console.error(error);
        }
    }

    async distribute(id, amount) {
        const sf = await Framework.create({
            chainId: chainId,
            provider: customHttpProvider
        });

        const signer = sf.createSigner({
            //Replace
            privateKey:
                "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
            provider: customHttpProvider
        });

        const USDCx = "0x42bb40bF79730451B11f6De1CbA222F17b87Afd7";

        try {
            const distributeOperation = sf.idaV1.distribute({
                indexId: id,
                superToken: USDCx,
                amount: amount
                // userData?: string
            });

            console.log("Distributing funds to your index subscribers...");

            await distributeOperation.exec(signer);

        } catch (error) {
            console.error(error);
        }
    }

}