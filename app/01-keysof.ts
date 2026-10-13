export { };

type Equal<A, B> =
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
function ok<_T extends true>(label: string): void {
    console.log(" ✓", label);
}

console.log("\n===1. keyof T ===");

type User = { id: number; name: string; email: string };

type UserKeys = keyof User;

ok<Equal<UserKeys, "id" | "name" | "email">>('keyof User = "id" | "name" | "email"');

const config = { host: "localhost", port: 3000 };
type ConfigKey = keyof typeof config;
ok<Equal<ConfigKey, "host" | "port">>('keyof type of config = "host" | "port "');

// Runtime twin: Object.keys gives the keys of a Value
console.log(" Object.keys(config):", Object.keys(config));
