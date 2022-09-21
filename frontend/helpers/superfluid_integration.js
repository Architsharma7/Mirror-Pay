import React, { useState } from "react";
import { customHttpProvider } from "../next.config";
import { Framework } from "@superfluid-finance/sdk-core";

class SuperfluidHelper {

    generateId() {
        return Math.floor(Math.random() * 1000000000);
    }

    async createIndex(indexId) {
        const sf = await Framework.create({
            chainId: 5,
            provider: customHttpProvider
        });

        const signer = sf.createSigner({
            privateKey:
                "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
            provider: customHttpProvider
        });

        const DAIx = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00";

        try {
            const createIndexOperation = sf.idaV1.createIndex({
                indexId: id,
                superToken: DAIx
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
            chainId: 5,
            provider: customHttpProvider
        });

        const signer = sf.createSigner({
            privateKey:
                "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
            provider: customHttpProvider
        });

        const DAIx = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00";

        try {
            const updateSubscriptionOperation = sf.idaV1.updateSubscriptionUnits({
                indexId: id,
                superToken: DAIx,
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
            chainId: 5,
            provider: customHttpProvider
        });

        const signer = sf.createSigner({
            privateKey:
                "0xd2ebfb1517ee73c4bd3d209530a7e1c25352542843077109ae77a2c0213375f1",
            provider: customHttpProvider
        });

        const DAIx = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00";

        try {
            const distributeOperation = sf.idaV1.distribute({
                indexId: id,
                superToken: DAIx,
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