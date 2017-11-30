import com.google.gson.JsonObject;

public class Hello {
    public static JsonObject main() {
        JsonObject response = new JsonObject();
        response.addProperty("message", "Hello World");
        return response;
    }
}
