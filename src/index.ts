#! /usr/bin/env node
import * as commander from "commander";
import { version, toolName, description } from "./metadata";

(async function main() {
    commander
        .version(version)
        .description(description)
        .name(toolName)
        .option("-p, --param1 [param1]", "Parameter1. Use your parameters here")
        .parse(process.argv);

        console.log(`Add your logic to implement ${toolName}. Version : ${version}. Parameter: ${commander.param1}`);

        var test = await Promise.resolve("test"); // async/await demonstration;

        console.log(`Promise Resolved to ${test}`)
})();





